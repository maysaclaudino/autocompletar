$(function () {
    'use strict';

    $('#autocomplete-dynamic').autocomplete({
        minChars: 4,
        lookup: function(query, done) {
            $.ajax({
                url: 'http://localhost:4000/graphql',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    query: `
                        query ($prefix: String, $limit: Int) {
                            channelsWithPrefix(prefix: $prefix, limit: $limit) {
                                CANAL
                            }
                        }
                    `,
                    variables: {
                        limit: 20,
                        prefix: query,
                    }
                }),
                success: function (response) {
                    let channels = response.data.channelsWithPrefix;
                    channels = channels.map((channel) => ({ value: channel.CANAL }));
                    done({ suggestions: channels });
                },
                error: function (error) {
                    console.error('Error:', error);
                    done({ suggestions: [] });
                }
            });
        },
    });
});