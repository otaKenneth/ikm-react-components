var ar_bag = [];
$(document).ready(() => {
    loadBag();

    async function loadBag() {
        await fetch('data/bag.json')
          .then(resp => resp.json())
          .then(data => {
            ar_bag = data;
          })

        $('#item-cnt').text(ar_bag.length)
        // Clone the bag for each ar_bag
        const copy_elBag = $('#bag-container .bag').eq(0).clone();
        
        // Clear the trend-container first
        $('#bag-container').empty();
        
        // Loop through each bag object to add in bag-container
        for (const objBag of ar_bag) {
            const temp_elBag = copy_elBag.clone();
            // Update the cloned element with trend data
            temp_elBag.attr('data-id', objBag.id)
            temp_elBag.find('img').attr('src', objBag.source);
            temp_elBag.find('h5').text(objBag.name);
            temp_elBag.find('input#itemCount').val(objBag.count);
            temp_elBag.find('p.description').text(objBag.description);
            temp_elBag.find('p.price').text(`$${objBag.price}`);
        
            // Append the updated element to the container
            $('#bag-container').append(temp_elBag);
        }
        
        updateOrderSummary();
        
        /**
         * Bag Actions
         */
        $('.item-cnt-btn.sub-btn').on('click', (e) => {
            let target = $(e.currentTarget);
            let prod_curCntVal = parseInt(target.closest('.input-group').find('input').val());
            let final_cnt = prod_curCntVal;

            if (prod_curCntVal - 1 < 0) {
                target.closest('.input-group').find('input').val("0")
                final_cnt = 0;
            } else {
                target.closest('.input-group').find('input').val(prod_curCntVal - 1)
                final_cnt = prod_curCntVal - 1;
            }

            let prod = ar_bag[target.closest('.bag').attr("data-id") - 1];
            var final_price = final_cnt * prod.baseprice;
            target.closest('.bag').find("p.price").text(`$${final_price}`)

            ar_bag[target.closest('.bag').attr("data-id") - 1].count = final_cnt;
            ar_bag[target.closest('.bag').attr("data-id") - 1].price = final_price;
            updateOrderSummary();
        })
        
        $('.item-cnt-btn.add-btn').on('click', (e) => {
            let target = $(e.currentTarget);
            let prod_curCntVal = parseInt(target.closest('.input-group').find('input').val());
            let final_cnt = prod_curCntVal;
            let prod = ar_bag[target.closest('.bag').attr("data-id") - 1];

            if (prod_curCntVal + 1 > prod.stock) {
                target.closest('.input-group').find('input').val(prod_curCntVal)
                alert("You have reached the maximum count of this item.")
            } else {
                target.closest('.input-group').find('input').val(prod_curCntVal + 1)
                final_cnt = prod_curCntVal + 1;
            }

            var final_price = final_cnt * prod.baseprice;
            target.closest('.bag').find("p.price").text(`$${final_price}`)

            ar_bag[target.closest('.bag').attr("data-id") - 1].count = final_cnt;
            ar_bag[target.closest('.bag').attr("data-id") - 1].price = final_price;
            updateOrderSummary();
        })

    }

    /**
     * Order Summary
     */
    function updateOrderSummary () {
        // Clone the bag for each ar_bag
        const copy_elCheckoutProd = $('#list-of-products li').eq(0).clone();
        
        // Clear the trend-container first
        $('#list-of-products').empty();
        
        // Loop through each bag object to add in bag-container
        let total_price = 0;
        for (const objBag of ar_bag) {
            const temp_elBag = copy_elCheckoutProd.clone();
            // Update the cloned element with trend data
            temp_elBag.find('h6').text(objBag.name);
            temp_elBag.find('small.description').text(objBag.description);
            temp_elBag.find('span.price').text(objBag.price);
            total_price += parseFloat(objBag.price);
        
            // Append the updated element to the container
            $('#list-of-products').append(temp_elBag);
        }

        $('strong#price-total').text(`$${total_price}`);
    }

})
