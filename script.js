function sendMail(params) {
    var tempParams = {
      from_name: document.getElementById("fromName").value,
      email_sender: document.getElementById("emailSender").value,
      subject_sender: document.getElementById("subjectSender").value,
      message_sender: document.getElementById("message").value,
    };
  
    emailjs.send('service_3lj9j9k', 'template_eyis2gf', tempParams)
      .then(function(response) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mail Sent Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }, function(error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: error.text,
        });
      });
  }

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   
    var typed = new Typed(".typing",{
        strings: ["Full stack developer","Tech savvy","visionary"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Full stack developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });