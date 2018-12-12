using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class LoansController : ControllerBase
    {
        private readonly LoansContext _context;

        public LoansController(LoansContext context)
        {
            _context = context;

            if(_context.LoanItems.Count() == 0) 
            {
                _context.LoanItems.Add(new LoanItem { Name = "Item1", Funding = 0.0, Repayment = 0.0 });
                _context.SaveChanges();
            }
        }

        // GET: api/Loans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanItem>>> GetLoanItems()
        {
            return await _context.LoanItems.ToListAsync();
        }

        // GET: api/Loans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanItem>> GetLoanItem(long id)
        {
            var loanItem = await _context.LoanItems.FindAsync(id);

            if (loanItem == null)
            {
                return NotFound();
            }

            return loanItem;
        }

        // POST: api/Loans
        [HttpPost]

        public async Task<ActionResult<LoanItem>> PostLoanItem(LoanItem loanItem)
        {
            _context.LoanItems.Add(loanItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoanItem", new { id = loanItem.Id }, loanItem);
        }

        // DELETE: api/loans/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoanItem>> DeleteLoanItem(long id)
        {
            var todoItem = await _context.LoanItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.LoanItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return todoItem;
        }
    }
}
