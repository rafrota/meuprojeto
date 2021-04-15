async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subrcribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`)
    const subscribersResponseJson = await subrcribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date : dynamicDate.toGMTString(),
        inscritos : inscritos
    })

}

export default tempo;