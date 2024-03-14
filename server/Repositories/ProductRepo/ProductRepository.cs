using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs.Categories;
using server.DTOs.PetTypes;
using server.DTOs.Products;
using server.Model;
using server.Pagination.QueryParams;
using Slugify;
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
                    ProductsId = p.ProductsId,
                    Name = p.Name,
                    Price = p.Price,
                    Stock = p.Stock,
                    Description = p.Description,
                    Image = p.Image,
                    Slug = p.Slug,
                    Category = new CategoryProductDTO
                    {
                        CategoryId = p.Category.CategoryId,
                        Name = p.Category.Name
                    },
                    Pet = new PetTypeDTO { PetId = p.Pet.PetTypeId, Name = p.Pet.Name }
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

        public async Task<ProductDTO> GetProductById(string id)
        {
            var product = await _context
                .Products.Select(p => new ProductDTO
                {
                    ProductsId = p.ProductsId,
                    Name = p.Name,
                    Stock = p.Stock,
                    Price = p.Price,
                    Image = p.Image,
                    Slug = p.Slug,
                    Description = p.Description,
                    Category = new CategoryProductDTO
                    {
                        CategoryId = p.Category.CategoryId,
                        Name = p.Category.Name
                    },
                    Pet = new PetTypeDTO { PetId = p.Pet.PetTypeId, Name = p.Pet.Name }
                })
                .FirstOrDefaultAsync(p => p.ProductsId == Guid.Parse(id));

            if (product == null)
                throw new Exception("No product found");

            return product;
        }

        public async Task<ProductDTO> GetProductBySlug(string slug)
        {
            if (string.IsNullOrEmpty(slug))
            {
                throw new Exception("Slug is required");
            }

            var product = await _context
                .Products.Select(p => new ProductDTO
                {
                    ProductsId = p.ProductsId,
                    Name = p.Name,
                    Stock = p.Stock,
                    Price = p.Price,
                    Image = p.Image,
                    Description = p.Description,
                    Slug = p.Slug,
                    Category = new CategoryProductDTO
                    {
                        CategoryId = p.Category.CategoryId,
                        Name = p.Category.Name
                    },
                    Pet = new PetTypeDTO { PetId = p.Pet.PetTypeId, Name = p.Pet.Name }
                })
                .FirstOrDefaultAsync(p => p.Slug == slug);

            if (product == null)
                throw new Exception("No product found");

            return product;
        }

        public async Task<Product> CreateProduct(Product product)
        {
            var productExists = await _context.Products.AnyAsync(p =>
                p.Name.ToLower() == product.Name.ToLower()
            );

            if (productExists)
                throw new Exception("Product already exists");

            SlugHelper slug = new();

            var productToCreate = new Product
            {
                Name = product.Name,
                Stock = product.Stock,
                Price = product.Price,
                Image = product.Image,
                Description = product.Description,
                CategoryId = product.CategoryId,
                PetId = product.PetId,
                Slug = slug.GenerateSlug(product.Name)
            };

            await _context.Products.AddAsync(productToCreate);
            await _context.SaveChangesAsync();
            return productToCreate;
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
