namespace server.Pagination.QueryParams
{
    public class ProductsParams : QueryParameters
    {
        public string? Name { get; set; }
        public double Price { get; set; }
        public string? Criteria { get; set; } // "gt" or "lt"
        public string? Category { get; set; }
    }
}
