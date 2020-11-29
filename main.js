class Course {

    constructor(title, instructor, price, description) {
        this.title = title;
        this.instructor = instructor
        this.price = price;
        this.description = description;
    }

}


class CourseUI {

    static showCourses() {
        const Courses = [
            {
                title: 'Cs',
                instructor: 'Ahmed Mohamed',
                price: 600,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis autem alias id odit cupiditate'

            },
            {
                title: 'JS',
                instructor: 'Hassan El-Sobky',
                price: 800,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis autem alias id odit cupiditate'

            },
            {
                title: 'JavaSE',
                instructor: 'Yousef',
                price: 700,
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis autem alias id odit cupiditate'

            }

        ]

        for (let course of Courses) {
            CourseUI.Dispaly(course);
        }

    }


    static Dispaly(courses) {
        const list = document.getElementById('Data');
        const row = document.createElement('tr');
        row.innerHTML = `
           <td>${courses.title}</td>
           <td>${courses.instructor}</td>
           <td>${courses.price}</td>
           <td>${courses.description}</td>
           <td><button class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        `
        list.appendChild(row);

    }

    static showMessage(message,className)
    {
        const div=document.createElement('div');
        div.className=`alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const sec=document.querySelector('.section-form')
        const fo=document.getElementById('form');
        sec.insertBefore(div,fo);
    }




}


document.addEventListener('DOMContentLoaded', CourseUI.showCourses)
document.getElementById('form').addEventListener('submit',(val)=>{
    val.preventDefault();
   const title=document.getElementById('Title').value;
   const instructor=document.getElementById('instructor').value;
   const price=document.getElementById('price').value;
   const description=document.getElementById('description').value;


    if(title ==='' || instructor ==='' || price ==='' || description ==='' )
    {
        CourseUI.showMessage("Cann't Submit Null Fields","danger")
    }
    else if(price < 500){
    CourseUI.showMessage("Price Is Very low , You Cannot Sell Any of Courses Less Than 500" 
    , "danger");
    }
    else{
   const c =new Course(title,instructor,price,description);
  CourseUI.Dispaly(c);
  CourseUI.showMessage("Course Created Successfully" , "success");

    }
})
