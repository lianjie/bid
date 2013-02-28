describe('function', function() {
    describe('function_to_string', function() {
        it('function should be translate to string', function() {
            var add_function = function(p1, p2) {
                return p1 + p2;
            }
            expect(add_function.toString()).not.toBe("function (p1, p2) { return p1 + p2; }");
        });
    });
});
describe('click_create_activity',function() {
    it('exit localStorage.activity',function() {
        var activity_name = "activity1";
         $("#activity_name").val(activity_name);
        expect(window.localStorage.activity).toEqual("activity1");
    });
});
