document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetUrl = this.getAttribute('href');

        document.body.style.transition = "opacity 0.4s ease";
        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 400);
    });
});

const orderForm = document.getElementById('cafe-order-form');
const successMessage = document.getElementById('success-message');

if (orderForm) {
    orderForm.addEventListener('submit', function (event) {

        event.preventDefault();

        successMessage.style.display = 'block';

        orderForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// Order Form Submit Logic
const orderForm = document.getElementById('cafe-order-form');
const successMessage = document.getElementById('success-message');

if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
        // पेज रीलोड होने से रोकना
        event.preventDefault(); 
        
        // फॉर्म से यूज़र की जानकारी (Values) निकालना
        const customerName = document.getElementById('name').value;
        const itemSelect = document.getElementById('order-item');
        const itemName = itemSelect.options[itemSelect.selectedIndex].text; // चुने हुए आइटम का नाम
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

       
        successMessage.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 10px;">🎉 Order Confirmed!</div>
            <p style="color: #2d3436; margin-bottom: 15px;">Our fastest Ghoul is dashing across the rooftops to deliver it. 🏃‍♂️💨</p>
            
            <div style="background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px; text-align: left; font-size: 1rem; color: #1c1c1c;">
                <h4 style="margin-bottom: 10px; border-bottom: 2px dashed #00b894; padding-bottom: 5px;">🧾 Order Details:</h4>
                <p><strong>Name:</strong> ${customerName}</p>
                <p><strong>Item:</strong> ${itemName}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Delivering to:</strong> ${address}</p>
            </div>
        `;
        
                successMessage.style.display = 'block';
        
               orderForm.reset();

               setTimeout(() => {
            successMessage.style.display = 'none';
        }, 1000); 
    });
}