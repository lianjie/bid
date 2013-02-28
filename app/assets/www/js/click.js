function click_create_in_create_activity_page()
{
    var activity_name = document.getElementById("activity_name").value
    if (undefined==window.localStorage.activity)
        window.localStorage.activity = activity_name;
    else
        window.localStorage.activity += "*" + activity_name;
    window.location.href = "#apply";
    window.location.reload();
}