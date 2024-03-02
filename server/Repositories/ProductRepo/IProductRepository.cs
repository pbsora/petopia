using server.Model;
using server.Pagination.QueryParams;
using X.PagedList;

namespace server.Repositories.ProductRepo
{
    public interface IProductRepository
    {
        Task<IPagedList<Product>> GetProducts(ProductsParams productsParams);
        Task<Product> GetProductById(int id);
        Task<Product> CreateProduct(Product product);
        Product UpdateProduct(Product product);
        Product DeleteProduct(Product product);
    }
}
