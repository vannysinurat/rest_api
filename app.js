$(document).ready(function() {
    // Set up the REST API URL
    const apiUrl = "https://ojk-invest-api.herokuapp.com/api/v1/investments";
  
    // Use jQuery's AJAX function to fetch data from the API
    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function(response) {
        // Extract the investment data from the response
        const data = response.data;
  
        // Loop through the investments and add them to the table
        for (let i = 0; i < data.length; i++) {
          const investment = data[i];
          const name = investment.name;
          const type = investment.type;
          const issuer = investment.issuer;
          const price = investment.price;
          const row = "<tr><td>" + name + "</td><td>" + type + "</td><td>" + issuer + "</td><td>" + price + "</td></tr>";
          $("#investments tbody").append(row);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error fetching investments: " + errorThrown);
      }
    });
  });
  
