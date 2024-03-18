﻿namespace hotel.Models
{
    public class NewAccountViewModel
    {
        public Guid Id { get; set; }

        public required string UserName { get; set; }

        public required string Password { get; set; }
        public required string Email { get; set; }
    }
}
