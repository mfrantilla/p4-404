$(document).ready(function () {
            var search = $('input').searchMeme({ onSearch: function (searchText) {
                setTimeout(function () {
                    search.searchMeme({ searchComplete: true });
                    alert('Search completed.');
                }, 3000);
            }
            , buttonPlacement: 'left', button: 'red'
            });
        });