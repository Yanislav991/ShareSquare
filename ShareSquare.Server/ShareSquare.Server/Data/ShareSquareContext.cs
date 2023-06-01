using Microsoft.EntityFrameworkCore;
using ShareSquare.Server.Data.Models;

namespace ShareSquare.Server.Data
{
    public class ShareSquareContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=ShareSquareDatabase.db");
        }
    }
}
