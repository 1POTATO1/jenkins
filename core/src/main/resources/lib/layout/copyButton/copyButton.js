// @include org.kohsuke.stapler.zeroclipboard

Behaviour.specify("span.copy-button", 'copyButton', 0, function(e) {
        var btn = e.firstChild;
        var id = "copy-button"+(iota++);
        btn.id = id;

        var clip = new ZeroClipboard({forceHandCursor: true});
        makeButton(btn);

        var container = e.getAttribute("container");
        if (container) {
            container = $(e).up(container);
            container.style.position = "relative";
            clip.glue(btn, container);
        } else {
            clip.glue(btn);
        }

        clip.on('complete',function() {
            notificationBar.show(e.getAttribute("message"));
        });
        clip.on('mouseover',function() {
          $(id).addClassName('yui-button-hover')
        });
        clip.on('mouseout',function() {
            $(id).removeClassName('yui-button-hover')
        });
        clip.on('mousedown',function() {
            $(id).addClassName('yui-button-active')
        });
        clip.on('mouseup',function() {
            $(id).removeClassName('yui-button-active')
        });
});
