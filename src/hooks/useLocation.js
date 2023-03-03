let latitude = 28.6542
let longitude = 77.2373

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const success = (pos) => {
    latitude = pos.coords.latitude
    longitude = pos.coords.longitude
}

const error = (e) => {
    alert("Can't fetch location!")
}

const useLocation = () => {

    if (navigator.geolocation) {
        const permissions = navigator.permissions.query({ name: "geolocation" })
        if (permissions.state === "granted") {
            navigator.geolocation.getCurrentPosition(success)
        }
        else if (permissions.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, error, options)
        }
        else if (permissions.state === "denied") {
            alert("Permission was denied. Please reload page and allow or type manually!")
        }

    }
    else {
        alert("Permission was denied. Please reload page and allow or type manually!")
    }
    return [latitude, longitude]
}

export default useLocation