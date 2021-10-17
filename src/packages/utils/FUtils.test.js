const FUtils = require("./FUtils")
// @ponicode
describe("FUtils.ShowAlert", () => {
    test("0", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: { config: { globalProperties: { $alert: () => "https://api.telegram.org/bot" } } } }, "text/plain", "Internal Interactions Strategist", "2021-07-29T17:54:41.653Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: { config: { globalProperties: { $alert: () => "http://www.example.com/route/123?foo=bar" } } } }, "xhtml", "Direct Functionality Orchestrator", "2021-07-29T17:54:41.653Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: { config: { globalProperties: { $alert: () => "https://api.telegram.org/bot" } } } }, "location", "International Intranet Coordinator", "2021-07-30T00:05:36.818Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: { config: { globalProperties: { $alert: () => "https://api.telegram.org/bot" } } } }, "voice", "Direct Functionality Orchestrator", "2021-07-29T17:54:41.653Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: { config: { globalProperties: { $alert: () => "Www.GooGle.com" } } } }, "application/data", "Dynamic Quality Specialist", "2021-07-29T17:54:41.653Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            FUtils.ShowAlert({ appContext: {} }, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("FUtils.ShowMessage", () => {
    test("0", () => {
        let callFunction = () => {
            FUtils.ShowMessage({ appContext: { config: { globalProperties: { $message: () => "Unable to allocate address" } } } }, "object", "The line-by-line profiler can only be used in dev.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            FUtils.ShowMessage({ appContext: { config: { globalProperties: { $message: () => "Mock Error Message" } } } }, "number", "Warning: ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            FUtils.ShowMessage({ appContext: { config: { globalProperties: { $message: () => "Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates." } } } }, "object", "Error:")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            FUtils.ShowMessage({ appContext: { config: { globalProperties: { $message: () => "The app does not exist" } } } }, "number", "No response")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            FUtils.ShowMessage({ appContext: { config: { globalProperties: { $message: () => "Uploaded file was not added to the resource. " } } } }, "object", "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            FUtils.ShowMessage(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("FUtils.ShowNotify", () => {
    test("0", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: { config: { globalProperties: { $notify: () => true } } } }, "object", "International Intranet Coordinator", "photo", "2021-07-29T20:12:53.196Z", 0.0005)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: { config: { globalProperties: { $notify: () => false } } } }, "string", "Future Interactions Representative", "sets", "2021-07-29T23:03:48.812Z", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: { config: { globalProperties: { $notify: () => false } } } }, "string", "International Intranet Coordinator", "voice", "2021-07-29T20:12:53.196Z", 0.0001)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: { config: { globalProperties: { $notify: () => false } } } }, "object", "Internal Interactions Strategist", "html", "2021-07-29T23:03:48.812Z", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: { config: { globalProperties: { $notify: () => false } } } }, "string", "Internal Interactions Strategist", "venue", "2021-07-29T20:12:53.196Z", 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            FUtils.ShowNotify({ appContext: {} }, "", "", undefined, undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
