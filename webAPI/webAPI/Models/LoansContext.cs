using Microsoft.EntityFrameworkCore;

namespace webAPI.Models
{
    public class LoansContext : DbContext
    {
        public LoansContext(DbContextOptions<LoansContext> options) 
            : base(options)
        {
        }

        public DbSet<LoanItem> LoanItems { get; set; }
    }
}
