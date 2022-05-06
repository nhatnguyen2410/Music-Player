function Validator(formSelector) {
    var formRules = {};
    var _this = this;


    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            } else {
                element = element.parentElement;
            }
        }
    }
    // Lấy ra form-element trong DOM từ formSelector
    var formElement = document.querySelector(formSelector);


    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này ';
        },
        email: function(value) {
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng định dạng email ! ';
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự ! `;
            }
        },


    }


    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {

                var ruleInfo;
                var isRuleHasValue = rule.includes(':');
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }


                var ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }

            }


            // lắng nghe sự kiện(blur,change,...)
            input.onblur = handleValidate;
            input.oninput = handleClearErr;

        }
        console.log(formRules)

        function handleValidate(event) {
            // console.log(event.target.value);
            var rules = formRules[event.target.name];
            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) {
                    break;
                }
            }
            //Thông báo lỗi ra UI
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');

                if (formGroup) {
                    var formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                        formGroup.classList.add('invalid');
                    }
                }
            }
            return !errorMessage;

        }

        function handleClearErr(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message')
                if (formMessage) {
                    formMessage.innerText = '';
                }

            }
        }

    }

    //Xử lý hành vi submit form 
    formElement.onsubmit = function(event) {
        event.preventDefault();



        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }
        //khi không có lỗi thì submit form 
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var EnableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(EnableInputs).reduce(function(values, input) {
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            };
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        default:
                            values[input.name] = input.value;
                    }

                    return values;
                }, {});
                _this.onSubmit(formValues)

            } else {
                formElement.submit();
            }
        }
    }
}