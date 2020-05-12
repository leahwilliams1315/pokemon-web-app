import React, {FC} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import {PokeDialogProps} from '../definitions'

const formatImageName = (pokemonName: string, spriteLabel: string) => {
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) + " " + spriteLabel;
};

// @ts-ignore
export const PokemonDialog: FC<PokeDialogProps> = ({pokemonData, open = false, pokemonNumber, dialogClosed}) => {

    return <Dialog
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      onClose={() => {
        dialogClosed();
      }}
      open={Boolean(pokemonData)}
    >
      <DialogContent>
        <div className="dialog-image" style={{backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png)`}} />
        <DialogContentText id="alert-dialog-slide-description">
          {pokemonData ?
            pokemonData
              .species_data
              .flavor_text_entries
              .filter((flavourText: any, index: number, list: any) => list.findIndex((ft: any) => ft.flavor_text === flavourText.flavor_text) === index)
              .map((flavourText: any) => <span>
                <span>{flavourText.version.name}</span>
                <Typography variant="body1" gutterBottom> {flavourText.flavor_text} </Typography>
              </span>)
            : "LOADING..."}
        </DialogContentText>


        <GridList cellHeight={200} cols={2} spacing={7}>
          {Object.keys(pokemonData?.sprites || {}).map(spriteKey =>
            ({info: spriteKey, imgURL: pokemonData.sprites[spriteKey]})
          ).filter((spriteObj) => spriteObj.imgURL)
            .map(spriteObj =>
              <GridListTile cols={1} className="grid-tile">
                <img src={spriteObj.imgURL}  alt={spriteObj.info} />
                <GridListTileBar
                  title={formatImageName(pokemonData.name, spriteObj.info)}
                  // subtitle={<span>by: {tile.author}</span>}

                />
              </GridListTile> )}


        </GridList>


      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => dialogClosed()}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>;
  }


