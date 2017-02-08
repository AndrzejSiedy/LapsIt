using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wonga.Controllers.Web
{
    public class AppController: Controller
    {


        public IActionResult Index()
        {
            ViewBag.Title = "Wonga Test Exercise";
            return View();
        }

        public IActionResult Header()
        {
            return View();
        }

    }
}
