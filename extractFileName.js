// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

// my original solution

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return String(dirtyFileName.match(/\_\w+\_?\w+?\-?\w+?\.\w+\./)).slice(1,-1);
    }
}

// what I learned from others' solutions


class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.match(/^\d+_([^.]+\.[^.]+)/)[1]; //smarter regex - match creates an array with the full string as well as just the part you're looking for at index 1
    }
}