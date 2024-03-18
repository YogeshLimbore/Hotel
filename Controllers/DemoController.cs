using hotel.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace hotel.Controllers
{
    public class DemoController : Controller
    {
        private readonly ILogger<DemoController> _logger;

        public DemoController(ILogger<DemoController> logger)
        {
            _logger = logger;
        }

        public IActionResult Test()
        {
            return View();
        }

    }
}
