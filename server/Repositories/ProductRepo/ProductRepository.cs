using Microsoft.EntityFrameworkCore;
using server.Data;
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

        public async Task<IPagedList<Product>> GetProducts(ProductsParams productsParams)
        {
            var products = _context.Products.OrderBy(p => p.Name).AsQueryable();
            if (!string.IsNullOrEmpty(productsParams.Name))
                products = products.Where(p => p.Name.Contains(productsParams.Name));

            if (!string.IsNullOrEmpty(productsParams.PriceCriteria) && productsParams.Price > 0)
            {
                if (productsParams.PriceCriteria == "gt")
                    products = products.Where(p => p.Price > productsParams.Price);
                else if (productsParams.PriceCriteria == "lt")
                    products = products.Where(p => p.Price < productsParams.Price);
            }

            var filteredProducts = await products.ToPagedListAsync(
                productsParams.PageNumber,
                productsParams.PageSize
            );

            return filteredProducts;
        }

        public async Task<Product> GetProductById(int id)
        {
            var product = await _context
                .Products.Include(p => p.Category)
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
