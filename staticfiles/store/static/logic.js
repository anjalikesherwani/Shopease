// CAROUSEL LOGIC STARTS HERE
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })