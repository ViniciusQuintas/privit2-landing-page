// menu fixed

$(window).scroll(function () {
    $('.menu').toggleClass('menuFixed', window.scrollY > 80);
});

// menu mobile

$('.abrirMenu').click(function () { 
    $('.menu-mobile').slideToggle();
    
});

// scroll menu

$('menu-itens li a').click(function () { 
    const href = $(this).attr('href');
    const offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});

// grafico 

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [50, 50],
            backgroundColor:[
                'rgba(34, 34, 34)',
                'rgba(136, 170, 0)',
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        
    }
     
});