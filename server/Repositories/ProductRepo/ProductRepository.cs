using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs.Categories;
using server.DTOs.Products;
using server.Model;
using server.Pagination.QueryParams;
using X.PagedList;

namespace server.Repositories.ProductRepo
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IPagedList<ProductDTO>> GetProducts(ProductsParams productsParams)
        {
            var products = _context
                .Products.OrderBy(p => p.Name)
                .Select(p => new ProductDTO
                {
                    ProductId = p.ProductId,
                    Name = p.Name,
                    Price = p.Price,
                    Stock = p.Stock,
                    Description = p.Description,
                    Image = p.Image,
                    Category = new CategoryProductDTO
                    {
                        CategoryId = p.Category.CategoryId,
                        Name = p.Category.Name
                    },
                    Pet = new PetType { PetTypeId = p.Pet.PetTypeId, Name = p.Pet.Name }
                })
                .AsQueryable();

            //Filter by name
            if (!string.IsNullOrEmpty(productsParams.Name))
                products = products.Where(p =>
                    p.Name.ToLower().Contains(productsParams.Name.ToLower())
                );

            //Filter by category
            if (!string.IsNullOrEmpty(productsParams.Category))
            {
                products = products.Where(p =>
                    p.Category.Name!.ToLower().Contains(productsParams.Category.ToLower())
                );
            }

            //Filter by pet Type
            if (!string.IsNullOrEmpty(productsParams.Pet))
            {
                products = products.Where(p =>
                    p.Pet.Name!.ToLower().Contains(productsParams.Pet.ToLower())
                );
            }

            //Filter by price
            if (!string.IsNullOrEmpty(productsParams.Criteria) && productsParams.Price > 0)
            {
                if (productsParams.Criteria == "gt")
                    products = products.Where(p => p.Price > productsParams.Price);
                else if (productsParams.Criteria == "lt")
                    products = products.Where(p => p.Price < productsParams.Price);
            }

            var filteredProducts = await products.ToPagedListAsync(
                productsParams.PageNumber,
                productsParams.PageSize
            );

            return filteredProducts;
        }

        public async Task<ProductDTO> GetProductById(int id)
        {
            var product = await _context
                .Products.Select(p => new ProductDTO
                {
                    ProductId = p.ProductId,
                    Name = p.Name,
                    Stock = p.Stock,
                    Price = p.Price,
                    Image = p.Image,
                    Description = p.Description,
                    Category = new CategoryProductDTO
                    {
                        CategoryId = p.Category.CategoryId,
                        Name = p.Category.Name
                    },
                    Pet = new PetType { PetTypeId = p.Pet.PetTypeId, Name = p.Pet.Name }
                })
                .FirstOrDefaultAsync(p => p.ProductId == id);

            if (product == null)
                throw new Exception("No product found");

            return product;
        }

        public async Task<Product> CreateProduct(Product product)
        {
            var createdProduct = await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return createdProduct.Entity;
        }

        public Product UpdateProduct(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();
            return product;
        }

        public Product DeleteProduct(Product product)
        {
            _context.Remove(product);
            _context.SaveChanges();
            return product;
        }
    }
}
