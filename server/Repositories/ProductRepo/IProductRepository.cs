using server.DTOs.Products;
using server.Model;
using server.Pagination.QueryParams;
using X.PagedList;

namespace server.Repositories.ProductRepo
{
    public interface IProductRepository
    {
        Task<IPagedList<ProductDTO>> GetProducts(ProductsParams productsParams);
        Task<Product> GetProductById(string id);
        Task<ProductDTO> GetProductBySlug(string slug);
        Task<Product> CreateProduct(Product product);
        Product UpdateProduct(Product product);
        Product DeleteProduct(Product product);
    }
}
