function show_activity()
{
    var activity_array = new Array();
    activity_array = window.localStorage.activity.split("*");
    var activity = "";
    for (var i=0 ; i<activity_array.length ; i++ )
    {
        activity += "<li><a href='#apply'>" + activity_array[i] + "</a></li>";
    }
    $('#activity_list').html(activity);
}