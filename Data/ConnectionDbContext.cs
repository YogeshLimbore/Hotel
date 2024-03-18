using hotel.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace hotel.Data
{
    public class ConnectionDbContext : DbContext
    {
        public ConnectionDbContext(DbContextOptions<ConnectionDbContext>options) : base(options)
        {

        }
        public DbSet<CreateNewAccount> Details { get; set; }
    }
}
