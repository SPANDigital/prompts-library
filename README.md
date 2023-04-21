# prompts-library
Prompts library

Clone this library under your home directory

```bash
cd $HOME
git clone git@github.com:SPANDigital/prompts-library.git
```


## codeassistant and glow

### installing

```bash
brew tap SPANDigital/homebrew-tap
brew install codeassistant
brew install glow
```

### updating

```bash
brew up
brew reinstall codeassistant
```

### Configuration
It is recommended you set up codeassistant with a config file at `$HOME/.codeassistant.yaml` for default values

```yaml
openAiApiKey: <api key>
user: <your email adresss>
```

## Usage

To list available prompts

```bash
codeassistant list
```

## Examples

### Rewrite a headline

Command:
```bash
echo "SA will co-operate with Germans, says Lamola after former Steinhoff CEO Markus Jooste fails to appear in court" | codeassistant run copywriting rewrite-headline
```
Output:
```bash
Here are six variations using different copywriting formulas:

1. AIDA: Get the latest on the Steinhoff scandal as South Africa promises to work with Germany. Lamola speaks out after former CEO Markus Jooste fails to show up in court.
2. PAS: Shockwaves in the courtroom as former Steinhoff CEO Markus Jooste fails to appear in court. But there's hope yet as SA's Lamola promises cooperation with Germany.
3. 4 Ps: It's official: South Africa will work with Germany after former Steinhoff CEO Markus Jooste's no-show. Details from Lamola inside!
4. FAB: What do you get when you cross a former Steinhoff CEO with a court that he fails to show up to? Cooperation from South Africa! Read on for more from Lamola.
5. PASTOR: You won't believe what happened in the Markus Jooste case...but there's still hope thanks to SA's Lamola promising cooperation with Germany. Find out more inside.
6. SODA: In today's news, South Africa and Germany team up after the Steinhoff scandal. Cheers to Lamola for his promise of cooperation!
```
