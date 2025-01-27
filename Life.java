import java.util.Random;

import java.util.Scanner;
/*  A program that takes in a number and creates  random boolean. 
 */

public class Life {
	/*
	 * Runs the program.* Read the game parameters from standard
	 * 
	 * input (from scanner and sets as parameter for the methods).
	 * 
	 * @param args
	 */

	public static void main(String[] args) {
		// New Scanner
		Scanner scan = new Scanner(System.in);
		// Get rows number from the user
		int rows = scan.nextInt();
		// Get columns number from user
		int columns = scan.nextInt();
		// Get seed number from user
		long seed = scan.nextLong();
		scan.close();
		// Creates 2D array
		boolean[][] makeTwoD = makeTwoDim(rows, columns, seed);
		printTwoDimCharacter(makeTwoD);

	}/*
		 * 
		 * This method generates a random boolean and sets the outer ends of the box
		 * set.*To false print the character using number of rows,columns, and seed.*
		 * 
		 * @param rows number of rows to be printed.*
		 * 
		 * @param columns number of columns to be printed.*
		 * 
		 * @param seed number of random tries.*@return two dimensional boolean array
		 */

// METHODE 
	public static boolean[][] makeTwoDim(int rows, int columns, long seed) {
		Random d = new Random(seed);
		boolean matrix[][] = new boolean[rows][columns];
		for (int i = 1; i < matrix.length - 1; i++) {
			for (int j = 1; j < matrix[0].length - 1; j++) {
				matrix[i][j] = d.nextBoolean();

			}
		}
		return matrix;
	}

	/**
	 * This method print out the two dimensional character.
	 * 
	 * @param arr use the value matrix to print it.
	 */
	public static void printTwoDimCharacter(boolean[][] arr) {
		// For loop to print matrix array
		for (int row = 0; row < arr.length; row++) {
			for (int column = 0; column < arr[0].length; column++) {
				// If false print #
				if (arr[row][column]) {
					System.out.print("# ");
					// If true print -
				} else {
					System.out.print("- ");
				}
			}
			// Start new row
			System.out.println();

		}

	}

}