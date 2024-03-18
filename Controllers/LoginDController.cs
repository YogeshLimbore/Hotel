using hotel.Data;
using hotel.Models;
using hotel.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Packaging.Signing;

namespace hotel.Controllers
{
    public class LoginDController : Controller
    {

        public bool IsValidUser {  get; set; }



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




        [HttpPost]
        public IActionResult LoginSubmit(string userID, string PassWord)
        {
   
            var allUsers = dbContext.Details.ToList();
            // Loop through each user
            foreach (var user in allUsers)
            {
                // Check if the user's username matches the provided username
                if (user.UserName == userID)
                {
                    // If the usernames match, check if the passwords match
                    if (user.Password == PassWord)
                    {
                        // Authentication successful, redirect to home page
                        IsValidUser = true;
                        break;
                    }
                }
            }

            // Authentication failed, return an error message
            ViewBag.ErrorMessage = "Invalid username or password";
            return Json(IsValidUser);
        }


        public IActionResult Login()
        {
            return View();
        }




    }
}
