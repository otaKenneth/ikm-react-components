var ar_trends = [];
var ar_recentlyBought = [];
var ar_insta = [];

var hasLoaded = {
    "benefits": false,
    "trends": false,
    "rb": false,
    "nextinsta":false
};

$(document).ready(() => {
    $(window).on('scroll', handleScroll);

    // for header navigation
    $('#navigation #left-nav a').click((e) => {
        e.preventDefault();
        $('#navigation #left-nav a').removeClass('active');
        $(e.target).addClass('active');
    })

    /**
     * isElementInViewport
     * to check if content is on view
     * 
     * @param {*} el 
     * @returns bool
     */
    function isElementInViewport (el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    /**
     * handleScroll
     * handling UX on scroll
     */
    function handleScroll () {
        if (!hasLoaded.benefits) {
            if (isElementInViewport($('#benefits')[0])) {
                setTimeout(() => {
                    $('#benefits > div').css('opacity', '1');
                    hasLoaded.benefits = true;
                }, 300)
            }
        }

        if (!hasLoaded.trends) {
            if (isElementInViewport($('#trending')[0])) {
                loadTrends();
                hasLoaded.trends = true;
            }
        }

        if (!hasLoaded.rb) {
            if (isElementInViewport($('#recently-bought')[0])) {
                loadRecentlyBought();
                hasLoaded.rb = true;
            }
        }

        if (!hasLoaded.nextinsta) {
            if (isElementInViewport($('#insta')[0])) {
                loadNextInspo();
                hasLoaded.nextinsta = true;
            }
        }
    }
    
    async function loadTrends() {
        await fetch('data/trends.json')
          .then(resp => resp.json())
          .then(data => {
            ar_trends = data;
          })
        // Clone the trendbox for each trend (assuming trendbox is a template)
        const copy_elTrend = $('#trend-container .trends-box').eq(0).clone();
        
        // Clear the trend-container first
        $('#trend-container').empty();
        
        // Loop through each trend object to add in trend-container
        let key = 1;
        for (const objTrend of ar_trends) {
            const temp_elTrend = copy_elTrend.clone();
            // Update the cloned element with trend data
            temp_elTrend.find('img').attr('src', objTrend.source);
            temp_elTrend.find('h4').text(objTrend.name);
        
            // Append the updated element to the container
            setTimeout(() => {
                // temp_elTrend.addClass('grow-transition');
                $('#trend-container').append(temp_elTrend);
            }, (330 * key))
            key++;
        }

        $('#trending').css('height', '1040px')
    }

    async function loadRecentlyBought() {
        await fetch('data/rbs.json')
          .then(resp => resp.json())
          .then(data => {
            ar_recentlyBought = data;
          })
        // Clone the rbbox for each rb
        const copy_elRB = $('#rb-container .rb-box').eq(0).clone();
        
        // Clear the rb-container first
        $('#rb-container').empty();
        
        // Loop through each recently bought object/array to add in recently bought container
        let key = 1;
        for (const objRB of ar_recentlyBought) {
            const temp_elRB = copy_elRB.clone();
            // Update the cloned element with trend data
            temp_elRB.find('img').attr('src', objRB.source);
            temp_elRB.find('div.description').text(objRB.description);
            if (objRB.sale) {
                temp_elRB.find('.prices .sale-price').text(`$${objRB.sale_price}`);
                temp_elRB.find('.prices .o-price').text(`$${objRB.price}`);
            } else {
                temp_elRB.find('.prices .price').text(`$${objRB.price}`);
            }
        
            // Append the updated element to the container
            setTimeout(() => {
                temp_elRB.addClass('grow-transition')
                $('#rb-container').append(temp_elRB);
            }, (330 * key))
            key++;
        }
    }

    async function loadNextInspo() {
        await fetch('data/instas.json')
          .then(resp => resp.json())
          .then(data => {
            ar_insta = data;
          })
        const copy_elNextInspo = $('#insta-container img').eq(0).clone();

        // Clear the insta-container first
        $('#insta-container').empty();
        
        // Loop through each insta object/array to add in insta container
        let key = 1;
        for (const objNI of ar_insta) {
            const temp_elNxtIns = copy_elNextInspo.clone();
            // Update the cloned element with insta data
            temp_elNxtIns.attr('src', objNI.source);
        
            // Append the updated element to the container
            setTimeout(() => {
                $('#insta-container').append(temp_elNxtIns);
            }, 330 * key)
            key++;
        }
    }

    handleScroll();
})