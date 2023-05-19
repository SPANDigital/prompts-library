# prompts-library
_prompt library for prompt engineers_

This is a prompts library designed to be used in tandem with the [codeassistant](https://github.com/SPANDigital/codeassistant) tool for prompt
engineers.

We are looking for contributors, please see how you can [contribute](CONTRIBUTING.md), and our [code of conduct](CODE_OF_CONDUCT.md).

```bash
cd $HOME
git clone git@github.com:SPANDigital/prompts-library.git
```
_You can clone somewhere else, but you will need to specify in your ~/.codeassistant.yaml file_

## codeassistant 

### installing

```bash
brew tap SPANDigital/homebrew-tap
brew install codeassistant
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
userEmail: <your email adresss>
promptsLibraryDir: <directory to load prompts, defaults to $HOME/prompts-library>
```

More complex configurations are possible

```yaml
openAiApiKey: <api key>
user: <your email adresss>
promptsLibraryDir: <directory to load prompts, defaults to $HOME/prompts-library>
userAgent: <use this for user agent header>
debug:
  - configuration
  - sent-prompt
  - request-header
  - response-header
  - request-time
  - first-response-time
  - last-response-time
```

## Usage

To serve a basic web user interface

```bash
codeassistant serve
```

To list available prompts

```bash
codeassistant list
```

## Prompt engineers

### Template

Please make a copy of .template directory to get started.

### Free course for prompt engineers

- [ChatGPT Prompt Engineering](https://learn.deeplearning.ai/chatgpt-prompt-eng/)

### Resources for prompt enginers

- [PromptVine](https://promptvine.com/)
- [FlowGPT](https://flowgpt.com/)
- [AwesomeChatGPT](https://www.awesomegptprompts.com/)
- [Prompto](https://prompto.chat/)
- [PromptBase](https://promptbase.com/chatgpt)

## Examples

# Notes on debugging

- all debug output goes to STDERR

You can chain multiple debug switches to one command

```bash
echo "hamster" | codeassistant run ascii-artist draw-object \
  --debug configuration --debug sent-prompt \
  --debug request-headers --debug response-headers
```


# CSV Test Data

```bash
echo "Firstname, Surname, Email, State, Mobile Number, Zip Code" \
| codeassistant run csv generate-test-data rows:20
```

Here's an example of 20 rows of realistic test data with the provided headings:

```
Firstname, Surname, Email, State, Mobile Number, Zip Code
John, Smith, johnsmith@example.com, CA, 555-555-5555, 90210
Jessica, Garcia, jessicagarcia@example.com, NY, 123-456-7890, 10001
Michael, Johnson, michaeljohnson@example.com, TX, 555-867-5309, 75001
Emily, Davis, emilydavis@example.com, IL, 312-555-5555, 60601
Daniel, Rodriguez, drod@example.com, FL, 305-555-5555, 33109
Emily, Johnson, ejohnson@example.com, CA, 818-555-5555, 91301
David, Martinez, dmartinez@example.com, TX, 214-555-5555, 75201
Sophia, Williams, swilliams@example.com, GA, 404-555-5555, 30301
Liam, Thompson, liamt@example.com, MA, 617-555-5555, 02108
Ava, Hernandez, avah@example.com, TX, 210-555-5555, 78205
Benjamin, Harris, bharris@example.com, FL, 561-555-5555, 33401
Emma, Lee, emmalee@example.com, CA, 209-555-5555, 95376
Alexander, Wright, awright@example.com, NY, 212-555-5555, 10017
Madison, Brown, madbrown@example.com, FL, 305-555-5555, 33131
William, Johnson, wjohnson@example.com, TX, 512-555-5555, 78701
Isabella, Davis, idavis@example.com, CA, 415-555-5555, 94102
Mason, Rodriguez, mrodriguez@example.com, TX, 972-555-5555, 75202
Sophia, King, sking@example.com, IL, 773-555-5555, 60602
Ethan, Green, ethangreen@example.com, FL, 305-555-5555, 33166
Natalie, Cook, ncook@example.com, CA, 323-555-5555, 90012
```

Note that the data is randomly generated and does not represent real individuals or phone numbers.

# Rewrite a headline

```bash
echo "SA will co-operate with Germans, says Lamola after former Steinhoff CEO Markus Jooste fails to appear in court" \
| codeassistant run copywriting rewrite-headline
```

Here are six variations using different copywriting formulas:

1. AIDA: Get the latest on the Steinhoff scandal as South Africa promises to work with Germany. Lamola speaks out after former CEO Markus Jooste fails to show up in court.
2. PAS: Shockwaves in the courtroom as former Steinhoff CEO Markus Jooste fails to appear in court. But there's hope yet as SA's Lamola promises cooperation with Germany.
3. 4 Ps: It's official: South Africa will work with Germany after former Steinhoff CEO Markus Jooste's no-show. Details from Lamola inside!
4. FAB: What do you get when you cross a former Steinhoff CEO with a court that he fails to show up to? Cooperation from South Africa! Read on for more from Lamola.
5. PASTOR: You won't believe what happened in the Markus Jooste case...but there's still hope thanks to SA's Lamola promising cooperation with Germany. Find out more inside.
6. SODA: In today's news, South Africa and Germany team up after the Steinhoff scandal. Cheers to Lamola for his promise of cooperation!

### Find restaurants in a city you are visiting

```bash
echo "I am in San Francisco, I want to visit restaurants." \
| codeassistant run travel-guide advice
```

Great choice! San Francisco is known for its diverse food scene, here are some recommended places to visit for restaurants:

1. The Ferry Building Marketplace: Located on the Embarcadero, this indoor market features dozens of artisanal food vendors and restaurants.

2. Mission District: This neighborhood has a variety of restaurants featuring different cuisines like Mexican, Salvadoran, and Vietnamese. Some of the popular restaurants include La Taqueria, Tacolicious, and Loló.

3. China Town: One of the oldest and largest Chinatowns in the United States, offering authentic Chinese cuisine.

4. Union Square: If you want to try some upscale restaurants and dining experience, head towards Union Square where you can find some of the city's best fine-dining restaurants.

5. Chestnut Street: This street is popular for its bustling sidewalk cafes and tasty eateries.

If you like to explore more restaurants like these, you could visit North Beach, the Marina, the Fillmore district or Hayes Valley area, all these places have great dining options.

### Draw a hamnster in ascii art

```bash
echo "hamster" | codeassistant run ascii-artist draw-object
```

```
 (\ /)
 (='.'=)
 (")_(")
```

### IT Problems

Input:
```bash
echo "I can't view ppt files on my mac" \
| codeassistant run it-expert solve-problem
```

There are several ways to view PowerPoint (ppt) files on a Mac computer. Here are a few solutions:

1. Install Microsoft PowerPoint for Mac: Download and install Microsoft PowerPoint for Mac to open and view ppt files.

2. Use Keynote: Keynote is a presentation software developed by Apple that can open and edit PowerPoint files. Just drag and drop the ppt file onto the Keynote icon and it will open.

3. Convert the file to PDF: Convert the ppt file to a PDF file which can be viewed on any device using Preview, Adobe Acrobat, or any other PDF reader.

4. Use Google Slides: If you have a Google account, you can use Google Slides to open and view ppt files. Simply upload the file to Google Drive and open it in Google Slides.

I hope one of these solutions helps you to view your ppt files on your Mac.

### Generate a Django model

```bash
echo "Please create a model for an address detailing unit, street (required), street2, suburb, postcode, state. Have the state be a foreign key to a state model and the suburb and postcode be a foreign key to a suburb model. Include __str__ and __repr__ on all models." \
| codeassistant run python-django adhoc
```
