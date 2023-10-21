module.exports = {
    branches: [
        'master'
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md'
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json', 'prettier.json'],
                message: 'Release: Bump `package.json` to v${nextRelease.version}.\n\n[skip ci]\n${nextRelease.notes}'
            }
        ]
    ]
};
