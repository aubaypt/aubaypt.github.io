// Custom JS to enable all checkbox
jtd.onReady(function () {
    document.querySelectorAll('.task-list-item-checkbox').forEach((el) => {
        el.disabled = false;
    })
});