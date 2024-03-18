using hotel.Data;
using hotel.Models;
using hotel.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace hotel.Controllers
{
    public class LoginDController : Controller
    {





        private readonly ConnectionDbContext dbContext;
        private string? email;

        public LoginDController(ConnectionDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult Clogin()
        {
            return View();
        }



        [HttpPost]

        public IActionResult createaccount(string userName, string password, string email)
        {
            var Info = new CreateNewAccount
            {
                UserName = userName,
                Email = email,
                Password = password

            };
            dbContext.Details.Add(Info);
            dbContext.SaveChanges();
            return Json(Info);
        }


        //[HttpPost]
        //public IActionResult LoginSubmit(string userName, string password, string email)
        //{
        //    Login lg = new Login();
        //    lg.userName = userName;
        //    lg.password = password;
        //    lg.email = email;
        //    return Json(lg);
        //}



        public IActionResult Login()
        {
            return View();
        }




    }
}
