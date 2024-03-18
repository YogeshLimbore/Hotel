namespace hotel.Models
{
    public class Cart
    {
        string id { get; set; }
        public string? productName { get; set; }
        public productType pType {  get; set; } 
    }

    public enum productType
    {
        veg,
        NoVeg,
        Special
    }
}
