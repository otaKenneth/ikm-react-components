const ar_trends = [
    {
        "name": "Winter Fashion",
        "source": "assets/images/trends/Frame 2.png"
    },
    {
        "name": "Boots",
        "source": "assets/images/trends/Frame 2-1.png"
    },
    {
        "name": "Night Out",
        "source": "assets/images/trends/Frame 2-2.png"
    },
    {
        "name": "Holidays",
        "source": "assets/images/trends/Frame 2-3.png"
    },
    {
        "name": "Outerwear",
        "source": "assets/images/trends/Frame 2-4.png"
    },
    {
        "name": "White Dresses",
        "source": "assets/images/trends/Frame 2-5.png"
    },
    {
        "name": "Sweaters",
        "source": "assets/images/trends/Frame 2-6.png"
    },
    {
        "name": "Party",
        "source": "assets/images/trends/Frame 2-7.png"
    }
];

$(document).ready(() => {
    $('#navigation #left-nav a').click((e) => {
        e.preventDefault();
        $('#navigation #left-nav a').removeClass('active');
        $(e.target).addClass('active');
    })

    loadTrends();
    
    async function loadTrends() {
        // Clone the trendbox for each trend (assuming trendbox is a template)
        const copy_elTrend = $('#trend-container .trends-box').eq(0).clone();
        
        // Clear the trend-container first
        $('#trend-container').empty();
        
        // Loop through each trend object to add in trend-container
        for (const objTrend of ar_trends) {
            const temp_elTrend = copy_elTrend.clone();
            // Update the cloned element with trend data
            temp_elTrend.find('img').attr('src', objTrend.source);
            temp_elTrend.find('h4').text(objTrend.name);
        
            // Append the updated element to the container
            $('#trend-container').append(temp_elTrend);
        }
    }
})

  