const eventbrite = require('eventbrite');
const axios = require('axios');

// const eventbrite_sdk = eventbrite({
//     token: 'H6N2EVFMB4WRL7MRFCDA',
// });

// eventbrite_sdk
//     .request(`/users/me`)
//     .then(user => {
//         // Successful response
//         console.log(`Hi ${user.name}!`);
//     })
//     .catch(errInfo => {
//         // An error occurred
//         // Original error response is passed in `response` property
//         console.error(errInfo.response['error_description']);
//         // `ARGUMENT_ERROR` errors are parsed into `parsedError` property
//         const parsedError = errorInfo.parsedError;
//         // equivalent to errorInfo.response.error
//         console.log(parsedError.error);
//         // equivalent to errorInfo.response['error_desscripion']
//         console.log(parsedError.description);
//     });

    // ?time_filter=current_future
exports.getEvent  = (req, res) => {
    console.log(req.body.eid);
    console.log(req.params.eid);

    console.log("PINGED PINGED");
    const eid = req.body.eid;
    const baseUrl = "https://www.eventbriteapi.com/v3";
    const endpoint = `/events/58142024360/?token=H6N2EVFMB4WRL7MRFCDA`;

    axios({
        url: endpoint,
        method: 'GET',
        baseURL: baseUrl,
      })
      .then((response) => {
        // console.log('Body: ' + response.data);
        // res.json(response);
        return res.json(response.data);
      })
      .catch((e) => {
        console.log("Problem with request " + e.message)
        return res.sendStatus(500)
      })
      
    // axios.get(endpoint)
    //     .then(({data}) => {
    //     console.log(data);
    //     res.json(data);
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   })
}
      