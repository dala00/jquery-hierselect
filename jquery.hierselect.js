(function($){

    $(function() {
        $('select[data-hier-target]').hierSelect();
    });

    var methods = {
        init: function(options) {
            var settings = $.extend(true, {
            }, options);

            return this.each(function() {
                var $this = $(this);
                var data = $this.data('hierSelect');
                if (data == undefined) {
                    data = new HierSelect($this, settings);
                    $this.data('hierSelect', data);
                }
            })
        },
    };

    $.fn.hierSelect = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.hierSelect');
        }

    };

    function HierSelect(target, options) {
        this.target = target;
        this.options = options;
        this.changeTarget = $(target.data('hier-target'));
        this.field = target.data('hier-name');

        var options = [];
        this.changeTarget.find('option').each(function() {
            options.push($(this).prop('outerHTML'));
        });
        this.changeTarget.data('defaultOptions', options);

        target.change(this.onChange.bind(this));

        this.onChange();
    }

    HierSelect.prototype.onChange = function() {
        var defaultOptions = this.changeTarget.data('defaultOptions');
        var tag = '';
        var selected = this.target.val();

        for (var i = 0; i < defaultOptions.length; i++) {
            var option = $(defaultOptions[i]);
            var val = option.val();
            var need = false;
            if (val === undefined || val == '' || val == 0) {
                need = true;
            } else {
                var parentId = option.data(this.field);
                if (parentId == selected) {
                    need = true;
                }
            }
            if (need) {
                tag += defaultOptions[i];
            }
        }

        this.changeTarget.html(tag);
        if (this.changeTarget.data('hierSelect') !== undefined) {
            this.changeTarget.trigger('change');
        }
    }
})(jQuery);
