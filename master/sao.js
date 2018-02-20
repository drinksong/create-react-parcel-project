module.exports = {
  complete ({ yarnInstall, chalk, folderPath, folderName }) {
    console.log()
    console.log('Installing packages. This might take a couple of minutes.')
    console.log(
      `Installing ${chalk.cyan('react')},`,
      `${chalk.cyan('react-dom')},`,
      `and ${chalk.cyan('parcel-bundler')}...`
    )
    console.log()

    yarnInstall()

    console.log(
      `\nSuccessful!`,
      `Created ${chalk.green(folderName)} at ${chalk.green(folderPath)}`
    )
    console.log('Inside that directory, you can run several commands:\n')
    console.log(`  ${chalk.cyan('yarn start')}`)
    console.log('    Starts the development server.\n')
    console.log(`  ${chalk.cyan('yarn build')}`)
    console.log('    Bundles the app into static files for production.\n')
    console.log('\nWe suggest that you begin by typing:\n')
    console.log(`  ${chalk.cyan('cd')} ${folderPath}`)
    console.log(`  ${chalk.cyan('yarn start')}`)
    console.log()
  }
}
