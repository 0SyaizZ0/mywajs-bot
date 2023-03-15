import wweb from 'wwebjs'
const {
    Buttons
} = wweb

export default {
    cmd: 'menu',
    desc: 'menampilkan list menu',
    tags: 'main',
    run: async (mywa, m, {
        mc,
        text
    }) => {
        const tg = ['main', 'downloader', 'tools', 'owner']
        const res = Array.from(mywa.cmd.values())
            .filter(ce => tg.some(tag => ce.default.tags === tag));
        const ok = {};
        res.forEach((item) => {
            if (!(item.default.tags in ok)) ok[item.default.tags] = [];
            ok[item.default.tags].push(item.default.cmd);
        });
        const result = Object.entries(ok)
            .map(([tag, cmd]) => `[ ${tag} ]\n- ${cmd.join('\n- ')}`)
            .join('\n\n');

        let button = new Buttons(result, [{
            body: 'OWNER'
        }, {
            body: 'SCRIPT'
        }, ], '', '© wwebjs library');
        m.reply(button)
    }
}
