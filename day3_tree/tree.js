Ext.onReady(function () {
    var tree = new Ext.ux.tree.ColumnTree({
        width: 550,
        height: 300,
        rootVisible: false,
        autoScroll: true,
        title: 'Example Tasks',
        renderTo: Ext.getBody(),

        columns: [{
            header: 'Task',
            width: 330,
            dataIndex: 'task'
        }, {
            header: 'Duration',
            width: 100,
            dataIndex: 'duration'
        }, {
            header: 'Assigned To',
            width: 100,
            dataIndex: 'user'
        }],

        loader: new Ext.tree.TreeLoader({
            dataUrl: 'tree.json',
            uiProviders: {
                'col': Ext.ux.tree.ColumnNodeUI
            }
        }),

        root: new Ext.tree.AsyncTreeNode({
            text: 'Tasks'
        })
    });
});