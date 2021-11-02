


describe("Password testing function", () => {
    test("Password must in String format",
        () => {
            const pass = typeof("123abhi");
            expect(pass).toBe("string");
        });
    test("Password is empty",
        () => {
            const pass = "";
            expect(pass.length).toBe(0);
        });
    test("Check defined",
        () => {
            const pass = "";
            expect(pass).not.toBeUndefined();
        });
    test("Password length is below 6",
        () => {
            const pass = "abha"; 
            expect(pass.length).toBeLessThan(6);
        });
     test("Number of characters atleast 6",
        () => {
            const pass = "abhay123"; 
            expect(pass.length).toBeGreaterThanOrEqual(6);
         });
     test("Password contain atleast one capital, small and charecters",
        () => {
            const pass = "12345678";
            let res = false;
            let temp = 0;
            for (var i = 0; i < pass.length; i++){
                if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                    temp++;
                }
            }
            if (temp == pass.length) {
                res = true;
            }
            expect(res).toBeTruthy();
        });
    test("Password contain atleast one capital letter",
        () => {
            const pass = "Abhay123";
            let res = false;
            for (var i = 0; i < pass.length; i++){
                if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) {
                    res = true;
                }
            }
            expect(res).toBeTruthy();
        });
    test("Password contain small letters",
        () => {
            const pass = "Abhay123";
            let res = false;
            for (var i = 0; i < pass.length; i++){
                if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) {
                    res = true;
                }
            }
            expect(res).toBeTruthy();
        });
    test("Password contain atleast one character like !@#$%^&*(),.<>/';:][{}\|? ",
        () => {
            const pass = "Abhay@123";
            let res = false;
            for (var i = 0; i < pass.length; i++){
                if (pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47 || pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <= 64) {
                    res = true;
                }
            }
            expect(res).toBeTruthy();
        });
    test("Password contain atleast have one number",
        () => {
            const pass = "Abhay@123";
            let res = false;
            for (var i = 0; i < pass.length; i++){
                if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                    res = true;
                }
            }
            expect(res).toBeTruthy();
        });
});
