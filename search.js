var searchInput = document.getElementById('searchInput');
var items = document.getElementsByClassName('details');
searchInput.addEventListener('input', function ()
 {
    var searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length >= 1) {
        for (var i = 0; i < items.length; i++)
         {
            const item = items[i];
            var itemText = item.textContent.toLowerCase();
            if (itemText.indexOf(searchTerm) > -1) 
            {
                item.style.borderColor = "green";
                item.style.boxShadow = "0 0 1rem green";
                setTimeout(() => {
                    item.style.borderColor = "none";
                    item.style.boxShadow = "none"
                }, 3000)
            }
        }
    }
});
