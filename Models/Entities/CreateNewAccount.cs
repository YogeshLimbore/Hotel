namespace hotel.Models.Entities
{
    public class CreateNewAccount
    {
        public Guid Id { get; set; }

        public required string UserName { get; set; }

        public required string Password { get; set; }
        public required string Email { get; set; }

    }
}
