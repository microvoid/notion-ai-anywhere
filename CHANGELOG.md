### 1.3.2

Fixes

- Syntax highlighting finally works as expected in the generated Notion page
- New generated page icon (previous link was dead)

### 1.3.1

Fixes

- No longer fails to save individual answers when generating headers & table of contents

Misc

- Pin icon now matches the color theme

## 1.3.0

Features

- Option to generate headings & table of contents or not upon saving
- Generated table of contents is now inside a toggleable block

Fixes

- Improved handling of code blocks
- Improved handling of errors (shows a message if the token is revoked by Notion, more links to the FAQ...)

Misc

- Extended the FAQ

### 1.2.4

Fixes

- Issue where saving a very long prompt (> 2000 characters) would fail

### 1.2.3

Fixes

- Now able to save long conversations in one batch

Misc

- Added a link to the FAQ in the extension's popup

### 1.2.2

Fixes

- More explainers related to extension usage
- Default tag option is now no tag
- Show an error message when saving fails (yes, that wasn't the case already)

Misc

- Enabled null type checking (wasn't enabled yet because it isn't supported yet by Plasmo & the Notion SDK)

### 1.2.1

Fixes

- Handle case where a database doesn't have a URL property (was broken by 1.2.0)

# 1.0.0

- Intial release
