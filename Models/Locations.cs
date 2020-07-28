using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Locations
    {
         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string locationName { get; set; }
        public int key { get; set; }
        public int country { get; set; }
        public string adminArea { get; set; }
        
    }
}