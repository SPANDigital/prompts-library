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
echo "SA will co-operate with Germans, says Lamola after former Steinhoff CEO Markus Jooste fails to appear in court" \
| codeassistant run copywriting rewrite-headline
```
Output:
```
Here are six variations using different copywriting formulas:

1. AIDA: Get the latest on the Steinhoff scandal as South Africa promises to work with Germany. Lamola speaks out after former CEO Markus Jooste fails to show up in court.
2. PAS: Shockwaves in the courtroom as former Steinhoff CEO Markus Jooste fails to appear in court. But there's hope yet as SA's Lamola promises cooperation with Germany.
3. 4 Ps: It's official: South Africa will work with Germany after former Steinhoff CEO Markus Jooste's no-show. Details from Lamola inside!
4. FAB: What do you get when you cross a former Steinhoff CEO with a court that he fails to show up to? Cooperation from South Africa! Read on for more from Lamola.
5. PASTOR: You won't believe what happened in the Markus Jooste case...but there's still hope thanks to SA's Lamola promising cooperation with Germany. Find out more inside.
6. SODA: In today's news, South Africa and Germany team up after the Steinhoff scandal. Cheers to Lamola for his promise of cooperation!
```

### Find restaurants in a city you are visiting

Input:
```bash
echo "I am in San Francisco, I want to visit restaurants." \
| codeassistant run travel-guide advice
```
Output:
```
Great choice! San Francisco is known for its diverse food scene, here are some recommended places to visit for restaurants:

1. The Ferry Building Marketplace: Located on the Embarcadero, this indoor market features dozens of artisanal food vendors and restaurants.

2. Mission District: This neighborhood has a variety of restaurants featuring different cuisines like Mexican, Salvadoran, and Vietnamese. Some of the popular restaurants include La Taqueria, Tacolicious, and Loló.

3. China Town: One of the oldest and largest Chinatowns in the United States, offering authentic Chinese cuisine.

4. Union Square: If you want to try some upscale restaurants and dining experience, head towards Union Square where you can find some of the city's best fine-dining restaurants.

5. Chestnut Street: This street is popular for its bustling sidewalk cafes and tasty eateries.

If you like to explore more restaurants like these, you could visit North Beach, the Marina, the Fillmore district or Hayes Valley area, all these places have great dining options.
```

### Draw a hamnster in ascii art

```bash
echo "hamster" | codeassistant run ascii-artist draw-object
```

```
 (\ /)
 (='.'=)
 (")_(")
```
