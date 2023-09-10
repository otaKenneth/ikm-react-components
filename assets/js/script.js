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

const ar_recentlyBought = [
    {
        "description": "Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit",
        "source": "assets/images/recently-bought/Frame 2.png",
        "price": "38",
        "currency": "USD",
        "sale": false,
        "sale_price": ""
    },
    {
        "description": "Chevron Flap Crossbody Bag",
        "source": "assets/images/recently-bought/Frame 2-2.png",
        "price": "7.3",
        "currency": "USD",
        "sale": true,
        "sale_price": "5.77"
    },
    {
        "description": "Manilla Tan Multi Plaid Oversized Fringe Scarf",
        "source": "assets/images/recently-bought/Frame 2-3.png",
        "price": "39",
        "currency": "USD",
        "sale": true,
        "sale_price": "29"
    },
    {
        "description": "Diamante Puff Sleeve Dress - Black",
        "source": "assets/images/recently-bought/Frame 2-1.png",
        "price": "45.99",
        "currency": "USD",
        "sale": false,
        "sale_price": ""
    },
    {
        "description": "Banneth Open Front Formal Dress in Black",
        "source": "assets/images/recently-bought/Frame 2-4.png",
        "price": "99",
        "currency": "USD",
        "sale": true,
        "sale_price": "69"
    }
];

const ar_Insta = [
    {
        "source": "assets/images/insta/Rectangle 10.png"
    },
    {
        "source": "assets/images/insta/Rectangle 11.png"
    },
    {
        "source": "assets/images/insta/Rectangle 12.png"
    },
    {
        "source": "assets/images/insta/Rectangle 13.png"
    },
    {
        "source": "assets/images/insta/Rectangle 14.png"
    },
]

$(document).ready(() => {
    $('#navigation #left-nav a').click((e) => {
        e.preventDefault();
        $('#navigation #left-nav a').removeClass('active');
        $(e.target).addClass('active');
    })

    loadTrends();
    loadRecentlyBought();
    loadNextInspo();
    
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

    async function loadRecentlyBought() {
        // Clone the rbbox for each rb
        const copy_elRB = $('#rb-container .rb-box').eq(0).clone();
        
        // Clear the rb-container first
        $('#rb-container').empty();
        
        // Loop through each recently bought object/array to add in recently bought container
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
            $('#rb-container').append(temp_elRB);
        }
    }

    async function loadNextInspo() {
        const copy_elNextInspo = $('#insta-container img').eq(0).clone();

        // Clear the insta-container first
        $('#insta-container').empty();
        
        // Loop through each insta object/array to add in insta container
        for (const objNI of ar_Insta) {
            const temp_elNxtIns = copy_elNextInspo.clone();
            // Update the cloned element with insta data
            temp_elNxtIns.attr('src', objNI.source);
        
            // Append the updated element to the container
            $('#insta-container').append(temp_elNxtIns);
        }
    }
})

  